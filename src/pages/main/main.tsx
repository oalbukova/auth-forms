// react redux
import React from "react";

// components
import me from "../../images/me.jpg";

// ui-components
import {
  Card,
  Typography,
  Button,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

// styles
import styles from "./main.module.css";

const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <Card className={styles.card}>
        <CardActionArea>
          <CardMedia
            className={styles.img}
            component="img"
            image={me}
            alt="Ольга Альбукова"
            sx={{ maxWidth: 464 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Привет, я Ольга &#128578;
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Это мое тестовое задание на должность Frontend разработчик React.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Стек: React, Redux, TypeScript, React Router, React Hook Form,
              Material UI, Yup, CSS-модули, prettier.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://github.com/oalbukova"
          >
            Тут ссылка на портфолио
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Main;
