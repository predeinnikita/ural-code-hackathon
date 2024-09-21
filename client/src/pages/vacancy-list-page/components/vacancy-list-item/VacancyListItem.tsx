import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";

import styles from "./VacancyListItem.module.scss";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../components/routing/routes";

export const VacancyListItem: FC<VacancyListItemProps> = ({
  title,
  tags,
  organization,
}) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          {organization}
        </Typography>
        <Typography>
          <Stack direction="row" spacing={1}>
            {tags.map((x: string) => {
              return <Chip label={x} size="small" />;
            })}
          </Stack>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => navigate(ROUTES.VACANCY_PAGE)}
        >
          Откликнуться
        </Button>
      </CardActions>
    </Card>
  );
};

export interface VacancyListItemProps {
  title: string;
  tags: string[];
  organization: string;
}
