'use client';

import { useState } from 'react';
import styles from './button.module.css' 

export default function Button() {
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button className={styles.button} onClick={() => setCount(count + 1)}>Click me</button>
      <style jsx>{``}</style>
    </div>
  );
}