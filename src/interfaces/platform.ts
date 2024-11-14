export interface IPlatformSection {
  value: string;
  label: string;
  configuration: IPlatformConfiguration[];
}

export interface IPlatformConfiguration {
  value: string;
  label: string;
}
