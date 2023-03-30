import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items,sortState } = props;

  const sortedList = useMemo(() => {
    console.log('Items sorted');
if(sortState === "ascending"){
  console.log('ascending');
  return items.sort((a, b) => a - b);
}
if(sortState === "decending"){
  console.log('descending');
  return items.sort((a, b) => b - a);
}

    
  }, [items,sortState]); 
  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);