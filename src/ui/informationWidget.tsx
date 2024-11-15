import { Card, Statistic } from "antd";
import { ReactNode } from "react";

export function InformationWidget({
  title,
  icon,
  data,
  width,
}: {
  title: ReactNode;
  icon?: ReactNode;
  data: number | string;
  width?: string;
}) {
  return (
    <Card bordered={false} className={!width ? "w-full" : width}>
      <Statistic title={title} value={data} prefix={icon} />
    </Card>
  );
}
