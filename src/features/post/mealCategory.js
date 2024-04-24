import React from 'react'
import { useGetFoodByCategoryQuery } from './mealApi';

const mealCategory = () => {
  const { data, isLoading, isError, error } = useGetFoodByCategoryQuery();
  return (
    <div>mealCategory</div>
  )
}

export default mealCategory