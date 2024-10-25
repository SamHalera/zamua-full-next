"use client";
import { Button } from "@/components/ui/button";

import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import CustomInput from "../forms/CustomInput";

import { createOrUpdateProject } from "@/actions/admin/project";
import { useRouter } from "next/navigation";
import { ArrowLeft, Plus } from "lucide-react";
import { useProjectMemberStore } from "@/stores/projectMembers";
import { getProjectMembers } from "@/actions/projectMembers";
import { ProjectAndMediaType, SelectOptions } from "@/types/types";

import AddMediaForm from "./AddMediaForm";

import ButtonForMediaManager from "./ButtonForMediaManager";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useToast } from "@/hooks/use-toast";

export type ProjectFormType = {
  id: number;
  fullTitle: string;
  primaryTitleString: string;
  secondaryTitleString: string;
  cover: string;
  description: string;
  priority: number;
  slug: string;
};
const CreateOrUpdateProjectForm = ({
  project,
}: {
  project?: ProjectAndMediaType | null;
}) => {
  const [dataImage, setDataImage] = useState<string>(project?.cover ?? "");
  const [slugValue, setSlugValue] = useState<string>("");
  const [addMediaView, setAddMediaView] = useState<boolean>(false);
  const { projectMembers, setProjectMembers } = useProjectMemberStore();
  const router = useRouter();
  const { toast } = useToast();

  console.log("project==>", project);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<ProjectFormType>({
    values: {
      id: project?.id ?? 0,
      fullTitle: project?.fullTitle ?? "",
      primaryTitleString: project?.primaryTitleString ?? "",
      secondaryTitleString: project?.secondaryTitleString ?? "",
      description: project?.description ?? "",
      cover: project?.cover ?? "",
      priority: project?.priority ?? 1,
      slug: project?.slug ?? "",
    },
  });
  const handleSlugOnChange = (value: string) => {
    console.log("value==>", value);
    const newStr = value.toLocaleLowerCase().split(" ").join("-");
    console.log("newStr==>", newStr);
    setSlugValue(`${newStr}`);
  };

  const onSubmit: SubmitHandler<ProjectFormType> = async (values) => {
    try {
      console.log("values==>", values);
      const response = await createOrUpdateProject(values);
      console.log(response);
      if (response?.error) {
        toast({
          title: "Uh oh! Something went wrong.",
          description: response.error,
          variant: "destructive",
        });
        console.log("Response error==>", response.error);
      }
      if (response?.success) {
        console.log("Response success==>", response.success);
        toast({
          title: "Good news!",
          description: response.success,
          variant: "default",
          style: {
            backgroundColor: "#FEC140",
            color: "black",
          },
        });
        router.push("/admin/projects");
      }
    } catch (error) {
      console.log("Error on new project submit ==> ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const projectMembersDB = await getProjectMembers();
      if (projectMembersDB) {
        setProjectMembers(projectMembersDB);
      }
    };
    fetchData();
  }, []);

  const selectOptions: SelectOptions[] = [];
  if (projectMembers) {
    projectMembers.forEach((item) => {
      const obj: SelectOptions = {
        value: item.id.toString(),
        label: item.name,
      };
      selectOptions.push(obj);
    });
  }

  useEffect(() => {
    if (dataImage) {
      setValue("cover", dataImage, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
    if (slugValue) {
      console.log("slugValue=+>", slugValue);
      setValue("slug", slugValue, {
        shouldDirty: true,
        shouldValidate: true,
      });
    }
  }, [dataImage, setValue, slugValue]);
  return (
    <div>
      <div className="flex justify-between">
        <Button
          onClick={(e) => {
            e.preventDefault();
            router.push("/admin/projects");
          }}
          className="mb-10 bg-orange-400 h-10"
        >
          <ArrowLeft className="mr-4" /> back to project list
        </Button>

        {project && (
          <ButtonForMediaManager
            addMediaView={addMediaView}
            setAddMediaView={setAddMediaView}
          />
        )}
      </div>
      {!addMediaView ? (
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-6">
          <div className="flex gap-3 w-1/3">
            <div className="flex-1 flex flex-col items-center gap-3 ">
              <div className="fixed">
                {dataImage && (
                  <>
                    <span className="font-semibold text-primary text-center mb-4 block">
                      Project Cover
                    </span>

                    <CldImage
                      width="200"
                      height="200"
                      src={dataImage}
                      sizes="100vw"
                      alt="Description of my image"
                    />

                    <CustomInput
                      register={register}
                      label="Cover"
                      name="cover"
                      type="text"
                      customClass="input input-bordered w-full"
                      placeholder="Cover"
                      disabled={true}
                    />
                  </>
                )}
                <CldUploadWidget
                  onSuccess={(result: any) => {
                    console.log(result?.info?.secure_url);

                    setDataImage(result?.info?.secure_url);
                  }}
                  uploadPreset="orzznnzy"
                >
                  {({ open }) => {
                    return (
                      <button
                        name="uploadButton"
                        className="border border-primary bg-primary hover:bg-primary/40 text-xs duration-500 font-semibold w-44 rounded-full py-4 mt-4"
                        onClick={(e) => {
                          open();
                          e.preventDefault();
                        }}
                      >
                        Upload an Image
                      </button>
                    );
                  }}
                </CldUploadWidget>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <CustomInput
              label="Project ID"
              type="number"
              name="id"
              register={register}
              placeholder=""
              customClass="input input-bordered w-full"
              disabled
            />

            <CustomInput
              label="Project name"
              type="text"
              name="fullTitle"
              register={register}
              placeholder="name your project"
              customClass="input input-bordered w-full"
              required={true}
              error={errors.fullTitle}
              handleChangeValue={handleSlugOnChange}
            />
            <CustomInput
              label="Slug"
              type="text"
              name="slug"
              register={register}
              placeholder="project slug"
              customClass="input input-bordered w-full"
              disabled={true}
              value={project?.slug}
            />
            <CustomInput
              label="Order priority"
              type="number"
              name="priority"
              register={register}
              customClass="input input-bordered w-full"
              required={true}
            />

            <CustomInput
              label="First part of title"
              type="text"
              name="primaryTitleString"
              register={register}
              placeholder="First part of title"
              customClass="input input-bordered w-full"
              required={true}
              error={errors.primaryTitleString}
            />
            <CustomInput
              label="Second part of title"
              type="text"
              name="secondaryTitleString"
              register={register}
              placeholder="Second part of title"
              customClass="input input-bordered w-full"
              required={true}
              error={errors.secondaryTitleString}
            />

            <div className="flex-1">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <textarea
                  {...register("description")}
                  name="description"
                  className="textarea textarea-bordered h-24"
                  placeholder="Project description"
                ></textarea>
              </label>
            </div>
            <div className="flex-1 border border-primary rounded-md p-4 bg-slate-100 opacity-75">
              <div className="flex justify-between">
                <span className="text-primary font-semibold mb-4 block">
                  Members of this project:
                </span>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/admin/project-members");
                  }}
                  className="flex text-xs items-center gap-2"
                >
                  <Plus size={14} /> add members
                </Button>
              </div>
              {project?.projectMember &&
                project?.projectMember.length > 0 &&
                project.projectMember.map((member) => {
                  return (
                    <div key={member.name}>
                      <span className="font-semibold">{member.name} - </span>
                      <span>{member.features}</span>
                    </div>
                  );
                })}
            </div>
            <Button
              disabled={!isDirty || isSubmitting}
              className="self-end"
              type="submit"
            >
              {isSubmitting && (
                <span className="loading text-white loading-spinner loading-sm"></span>
              )}
              Submit
            </Button>
          </div>
        </form>
      ) : (
        project && <AddMediaForm project={project} />
      )}
    </div>
  );
};

export default CreateOrUpdateProjectForm;
