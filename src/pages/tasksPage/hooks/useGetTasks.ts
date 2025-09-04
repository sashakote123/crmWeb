import { useCallback, useEffect, useState } from 'react';

const useGetTasks = () => {
  const [tasksArray, setTasksArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const headerArray = ['ID', 'Название', 'Описание', 'Куратор', 'Исполнитель', 'Статус'];

  const fetchTasks = useCallback(async () => {
    setIsLoading(true);
    try {
      const resp = await fetch('http://localhost:3000/tasks');
      const json = await resp.json();
      setTasksArray(json);
    } catch (err) {
      console.error('Ошибка при загрузке проектов:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return { tasksArray, headerArray, isLoading, refetch: fetchTasks };
};

export default useGetTasks;
