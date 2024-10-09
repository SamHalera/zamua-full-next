import { Media, Project, ProjectMember } from "@prisma/client";
import { UseFormRegister } from "react-hook-form";

type MenuItem = {
  id: number;
  label: string;
  href: string;
};
type MenuType = MenuItem[];

type AdminMenuItem = {
  label: string;
  href: string;
  items?: SingleItem[];
};

type SingleItem = {
  label: string;
  href: string;
};

type AdminMenu = AdminMenuItem[];

export interface CloudinaryFile {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  access_mode: string;
  original_filename: string;
}

type CustomInputProps = {
  label?: string;
  autoComplete?: string;
  type: string;
  name: string;
  value?: string | number;
  register: UseFormRegister<any>;
  error?: FieldError | undefined;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  handleChangeValue?: (value: string) => void;
  customClass?: string;
  setValue?: UseFormSetValue<any>;
};

type SelectOptions = {
  value: string;
  label: string;
  disabled?: boolean;
};

interface ProjectType {
  id: number;
  cover: string | null;
  description: string | null;
  fullTitle: string;
  primaryTitleString: string;
  secondaryTitleString: string;
  projectMember: ProjectMember[];
}

type ProjectMemberEntityType = {
  name: string;
  id: number;
  features: string;
  // project: string[] | [];
  project: Project[];
};

interface ProjectAndMediaType extends ProjectType {
  media: Media[];
}
