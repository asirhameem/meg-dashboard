import { Badge, Text } from "@mantine/core";
import { TChipStatus, TChipType } from "../interfaces";
import { STATUS_CHIP } from "../constants";

interface IChipProps {
  type: TChipType;
  status: TChipStatus;
}

export const Chip = ({ type, status }: IChipProps) => {
  return (
    <Badge color={STATUS_CHIP[type][status]?.bg || "dark"}>
      <Text c={STATUS_CHIP[type][status]?.color || "white"} size="sm">
        {STATUS_CHIP[type][status]?.status || "N/A"}
      </Text>
    </Badge>
  );
};
