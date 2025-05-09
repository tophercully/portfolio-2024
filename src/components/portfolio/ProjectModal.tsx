import Modal from "../global/Modal";

import { Project } from "../../typeinterfaces";
import { ArrowUpRightFromSquare, BookOpenText, Notebook } from "lucide-react";
import React from "react";

type ProjectModalProps = {
  project: Project;
  open: boolean;
  onClose: () => void;
};

const ProjectModal = ({ project, open, onClose }: ProjectModalProps) => {
  const { name, desc, image, url, blogUrl, brandingUrl, stack } = project;
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <div className="flex flex-col gap-8 p-4">
        <img
          src={image}
          alt={name}
          className="max-h-[33svh] w-fit self-center rounded-md border border-base-150 object-contain shadow-lg"
        />
        <p className="flex flex-col gap-8 whitespace-pre-line font-light">
          {desc.split(/<br\s*\/?>/i).map((line, index) => (
            <React.Fragment key={index}>{line}</React.Fragment>
          ))}
        </p>
        {stack && (
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-nowrap text-sm">Made with:</p>
            {stack.map((tech, index) => (
              <span
                key={index}
                className="inline-block rounded-md bg-base-100 px-2 py-1 text-xs text-base-600"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-4">
          <a
            href={url}
            target={url && url.startsWith("/") ? "" : "_blank"}
            rel="noreferrer"
            className="flex items-center gap-2 text-nowrap rounded border border-base-500 bg-base-50 px-4 py-2 invert hover:bg-base-150"
          >
            <ArrowUpRightFromSquare size={16} />
            Visit site
          </a>
          {blogUrl && (
            <a
              href={blogUrl}
              target={blogUrl && blogUrl.startsWith("/") ? "" : "_blank"}
              rel="noreferrer"
              className="flex items-center gap-2 text-nowrap rounded border border-base-500 px-4 py-2 hover:bg-base-150"
            >
              <BookOpenText size={16} />
              Read About It
            </a>
          )}
          {brandingUrl && (
            <a
              href={brandingUrl}
              target={"_blank"}
              rel="noreferrer"
              className="flex items-center gap-2 text-nowrap rounded border border-base-500 px-4 py-2 hover:bg-base-150"
            >
              <Notebook size={16} />
              Branding and Design Guidelines
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
