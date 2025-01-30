import { ChevronLeft, ChevronRight } from '@mui/icons-material'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className="flex items-center justify-between  px-4 py-3 sm:px-6 ">
            {/* Mobile Pagination */}
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium
                        ${currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed dark:text-gray-500 dark:bg-gray-700'
                        : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium
                        ${currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed dark:text-gray-500 dark:bg-gray-700'
                        : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                >
                    Next
                </button>
            </div>
            {/* Desktop Pagination */}
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
                    {/* Botão Anterior */}
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-sm font-medium text-gray-400 ring-1 ring-gray-300 ring-inset
                            ${currentPage === 1
                            ? 'cursor-not-allowed dark:ring-gray-600 dark:text-gray-500'
                            : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                    >
                        <ChevronLeft fontSize="small" />
                    </button>
                    {/* Botões das Páginas */}
                    {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        return (
                            <button
                                key={page}
                                onClick={() => onPageChange(page)}
                                aria-current={page === currentPage ? 'page' : undefined}
                                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold
                                    ${page === currentPage
                                    ? 'z-10 bg-indigo-600 text-white dark:bg-indigo-500'
                                    : 'text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 dark:text-gray-300 dark:ring-gray-600 dark:hover:bg-gray-700'
                                }`}
                            >
                                {page}
                            </button>
                        );
                    })}
                    {/* Botão Próximo */}
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-sm font-medium text-gray-400 ring-1 ring-gray-300 ring-inset
                            ${currentPage === totalPages
                            ? 'cursor-not-allowed dark:ring-gray-600 dark:text-gray-500'
                            : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                    >
                        <ChevronRight fontSize="small" />
                    </button>
                </nav>
            </div>
        </div>
    );
}
