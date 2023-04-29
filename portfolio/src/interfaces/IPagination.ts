import { AppProps } from "./AppProps";

export interface IPagination extends AppProps {
    totalPages: number;
    currentPage: number;
    perPage: number;
    onPageChange: (currentPage: number) => void;
}