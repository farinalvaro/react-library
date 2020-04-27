import * as React from 'react'
import styles from './styles.module.css'

export interface ExampleComponentProps {
  text: string;
}

export const ExampleComponent: React.FC<ExampleComponentProps> = ({ text }) => {
  return <div style={{ color: 'red' }} className={styles.test}>Example Component: {text}</div>
}
