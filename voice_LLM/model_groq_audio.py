import tempfile
from text3speech import text2speech
from langchain_core.prompts import ChatPromptTemplate
from langchain_groq import ChatGroq
from playsound import playsound
from voice_record import record_audio
from speech import speech2text
# from text3speech import text2speech
from text2speech import text_to_speech_file
import os
from dotenv import load_dotenv

# Charger les variables d'environnement à partir du fichier .env
load_dotenv()

# Maintenant, vous pouvez accéder à vos variables d'environnement comme ceci :
voice_id = os.getenv('VOICE_ID')
groq_api = os.getenv('GROQ_API_KEY')
eleven_api = os.getenv('clef_api_eleven_lab')
# fonction pour lire le fichier txt du prompt
def read_system_prompt(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()
# chemin du fichier du prompt systeme
file_path = 'voice_LLM\system_prompt.txt'

# lecture du prompt systeme
system_prompt = read_system_prompt(file_path)

# creer un objet pour appeler le modele, avec le parametre de temperature
chat = ChatGroq(temperature=0.5, groq_api_key=groq_api, model_name="llama3-70b-8192")
# definir le contexte du modele, pour le template du chat, je defini le prompt du system
# sur le fichier txt qui contient le prompt
human = "{text}"
prompt = ChatPromptTemplate.from_messages([("system", system_prompt), ("human", human)])
chain = prompt | chat
# stocker la fonction speech2text qui permet d'enregistrer un message qui sera transcrit en texte et     
# utilisé en tant que prompt pour communiquer avec le modele
texte = speech2text("voice_LLM\human.wav")
# je defini la reponse en invoquant la chaine avec le texte issus de l'audio
reponse = chain.invoke({"text": texte})

# reponse = chain.invoke({"text": 'hello there how are you ?'})
####################### english only ##############################
# la fonction text2speech va convertir la reponse du modele en audio
# text2speech(reponse.content)
# playsound("voice_LLM\system.wav")
# reponse = chain.invoke({"text": "talk to me an ukrainian sentence"})
# print(reponse.content)
####################### partie eleven lab  ################################
text_to_speech_file(reponse.content)
playsound("voice_LLM\output.mp3")
# pour finir j'utilise la librairie playsound qui permet de lire automatiquement le fichier 
# audio transcrit du texte de la reponse du modele
