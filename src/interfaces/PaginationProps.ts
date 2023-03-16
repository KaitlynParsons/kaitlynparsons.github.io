import { AppProps } from "./AppProps";

export interface IPaginationProps extends AppProps {
    totalPages: number;
    currentPage: number;
    perPage: number;
    onPageChange: (currentPage: number) => void;
}