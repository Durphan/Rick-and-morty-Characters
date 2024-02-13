import { Chip } from "@mui/material";

type BadgeProps = {
    status: string;
}

export const BadgeCharacter: React.FC<BadgeProps> = ({ status }) => {
    return (
        <>
            {
                status === "Alive" ? (
                    <Chip label={status} sx={{ marginBottom: "1em", marginLeft: "0.5em", bgcolor: "green" }} component="span"></Chip>
                ) : status === "Dead" ? (
                    <Chip label={status} sx={{ marginBottom: "1em", marginLeft: "0.5em", bgcolor: "red" }} component="span"></Chip>
                ) : (
                    <Chip label={status} sx={{ marginBottom: "1em", marginLeft: "0.5em", bgcolor: "gray" }} component="span"></Chip>
                )
            }
        </>
    );
}