import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

function FormationCard() {
    return (
        <Card sx={{ width: 320 }}>
          <div>
            <Typography level="title-lg">Formation 1</Typography>
            <Typography level="body-sm">Apprendre le développement web</Typography>
            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="neutral"
              size="sm"
              sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
            >
              <BookmarkAdd />
            </IconButton>
          </div>
          <AspectRatio minHeight="60px" maxHeight="120px" minWidth="60px" maxWidth="120px">
            <img
              src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
              srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs">Participants</Typography>
              <Typography fontSize="lg" fontWeight="lg">
                23
              </Typography>
            </div>
            <Button
              variant="solid"
              size="md"
              color="primary"
              aria-label="Explore Bahamas Islands"
              sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
            >
              Voir la formation
            </Button>
          </CardContent>
        </Card>
    )
};

export default FormationCard;