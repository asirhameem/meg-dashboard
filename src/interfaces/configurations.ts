export interface IConfigurationPaints {
  id: number;
  name: string;
  hex: string;
  image: string;
  is_active: boolean;
}

export interface IConfigurationWheels {
  id: number;
  uuid: string;
  name: string;
  description: string;
  image: string;
  is_active: boolean;
}

export interface IConfigurationInteriorColor {
  id: number;
  uuid: string;
  name: string;
  hex: string;
  image: string;
  is_active: boolean;
  deleted_at: null;
  created_at: Date;
  updated_at: Date;
}

export interface IConfigurationPlatformInfo {
  id: number;
  uuid: string;
  section_name: string;
  configuration_name: string;
  configuration_type: string;
  configuration_title: string;
  configuration_value: string;
  configuration_content_url: string;
  is_active: boolean;
  deleted_at: null;
  created_at: Date;
  updated_at: Date;
}

export interface IConfigurationPlatformForm {
  section_name: string;
  configuration_name: string;
  configuration_type: string;
  configuration_title: string;
  configuration_value: string;
  configuration_content?: File;
}