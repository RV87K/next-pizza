import React from 'react';
import { FilterCheckboxProps } from '../shared/filter-checkbox';

type Item = FilterCheckboxProps;
interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit: number;
  className?: string;
  searchInputPlaceholder: string;
  onChange: (value: string[]) => void;
  defaultValue: string;
}

export const TCheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items = [],
  defaultItems = [],
  limit,
  className,
  searchInputPlaceholder,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const list = items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className={className}>
      <p>{title}</p>
      <div>
        {showAll && (
          <Input onChange={onChangeSearchValue} searchInputPlaceholder={searchInputPlaceholder} />
        )}
      </div>

      <div>
        {list.map((item, index) => (
          <FilterCheckbox text={item.text} key={index} />
        ))}
      </div>

      <button onClick={()=> setShowAll(!showAll)}>{showAll ? 'скрыть' : 'показать'}</button>
    </div>
  );
};
