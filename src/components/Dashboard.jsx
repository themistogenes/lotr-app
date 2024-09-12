import { useState, useEffect } from "react"
import useFetchData from '../hooks/useFetchData'
import Options from "./Options"
import styles from "./dashboard.module.css"

export default function Dashboard() {
  const { data, loading, error } = useFetchData();

  const questions = [
    'character',
    'movie',
    'book'
  ]

  return (
    <div className={styles.dashboard}>
      <Options />
    </div>
  )
}