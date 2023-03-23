import { Input, Label } from './Filter.styled';

export const Filter = ({ children, filter, handleFilterChange }) => {
  return (
    <Label>
      {children}
      <Input
        type="tel"
        name="filter"
        value={filter}
        placeholder="Type to search ..."
        onChange={handleFilterChange}
      />
    </Label>
  );
};
