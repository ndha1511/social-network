export interface SearchProps {
  handleSearch: (value: string) => void;
  handleClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  duration?: number;
  autoFocus?: boolean;
  placeholder?: string;
}
