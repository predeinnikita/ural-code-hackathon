import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../components/routing/routes";

export const OrganizationClaimListItem: FC<OrganizationClaimListItemProps> = ({
  title,
  tags,
  vuz,
  description
}) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea onClick={() => navigate(ROUTES.STUDENT_CLAIM_PAGE)}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="caption" component="div">
            {vuz}
          </Typography>
          <Stack direction="row" spacing={1}>
            {tags.map((x: string, i: number) => {
              return <Chip key={i} label={x} size="small" />;
            })}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export interface OrganizationClaimListItemProps {
  title: string;
  tags: string[];
  vuz: string;
  description: string;
}
