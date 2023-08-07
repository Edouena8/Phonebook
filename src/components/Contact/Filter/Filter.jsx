import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';
import { FilterInput, FilterWrap } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const valueFilter = useSelector(selectFilter);

  return (
    <FilterWrap>
      <b>Find contact by name</b>
      <FilterInput
        type="text"
        placeholder="Search"
        value={valueFilter}
        onChange={evt => dispatch(setFilter(evt.currentTarget.value))}
      />
    </FilterWrap>
  );
};

export default Filter;
