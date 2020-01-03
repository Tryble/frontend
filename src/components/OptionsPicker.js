import React, { useState } from 'react';
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';

const { Option } = Select;

const initialState = {
  data: [],
  value: [],
  fetching: false,
}
export const OptionsPicker = (props) => {

  const [state, setState] = useState(initialState);

  
  let lastFetchId = 0;
  
  const fetchUser = value => {
    console.log('fetching user', value);
    lastFetchId += 1;
    const fetchId = lastFetchId;
    setState({ data: [], fetching: true });
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(body => {
        if (fetchId !== lastFetchId) {
          // for fetch callback order
          return;
        }
        const data = body.results.map(user => ({
          text: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }));
        setState({ data, fetching: false });
      });
    };
    
    const newFetchUser = debounce(fetchUser, 800);

  const handleChange = value => {
    setState({
      value,
      data: [],
      fetching: false,
    });
  };


  return (
    <Select
      mode="multiple"
      labelInValue
      value={state.value}
      placeholder="Select users"
      notFoundContent={state.fetching ? <Spin size="small" /> : null}
      filterOption={false}
      onSearch={newFetchUser}
      onChange={handleChange}
      style={{ width: '100%' }}
    >
      {state.data.map(d => (
        <Option key={d.value}>{d.text}</Option>
      ))}
    </Select>
  )
}


export default OptionsPicker;