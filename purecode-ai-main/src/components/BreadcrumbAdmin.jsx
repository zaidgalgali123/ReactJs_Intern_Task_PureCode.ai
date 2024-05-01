import PageTitle from "./PageTitle";
import { LuChevronRight } from "react-icons/lu";

const BreadcrumbAdmin = ({ title, subtitle, link }) => {
    return (
      <>
        <PageTitle title={title} />
        <div className="flex w-full items-center justify-between">
          <h4 className="text-xl font-medium">{title}</h4>
          <ol
            aria-label="Breadcrumb"
            className="hidden min-w-0 items-center gap-2 whitespace-nowrap md:flex"
          >
            <li className="text-sm">
              <a href=""
                className="flex items-center gap-2 align-middle text-default-800 transition-all hover:text-primary-500"
              >
                {subtitle}
                <LuChevronRight size={16} />
              </a>
            </li>
            <li
              aria-current="page"
              className="truncate text-sm font-medium text-primary hover:text-primary-500"
            >
              {title}
            </li>
          </ol>
        </div>
      </>
    );
  };
  
  export default BreadcrumbAdmin;