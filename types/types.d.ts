import { Credit, Media, Project, ProjectMember } from "@prisma/client";
import { FieldError, FieldErrors, UseFormRegister } from "react-hook-form";

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
  error?: FieldError;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  handleChangeValue?: (value: string) => void;
  customClass?: string;
  setValue?: UseFormSetValue<any>;
  pattern?: RegExp;
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
  priority: string;
  slug: string;
}

type ProjectMemberEntityType = {
  name: string;
  id: number;
  features: string;
  // project: string[] | [];
  project?: Project[];
};

interface ProjectAndMediaType extends ProjectType {
  media: MediaType[];
}

type MediaType = {
  id: number;
  source: string;
  caption: string | null;
  publicId: string;
  // projectId: number | null;
  isGalleryItem: boolean;
  // project: Project | null;
  credit: Credit | null;
};

type MusicFeatureType = {
  id: number;
  title: string;
  subTitle: string | null;
  iframe: string;
  path: string;
  priority: string;
  cover: string | null;
};

type ToucheDataType = {
  startX: number;
  startY: number;
  moveX: number;
  moveY: number;
};
