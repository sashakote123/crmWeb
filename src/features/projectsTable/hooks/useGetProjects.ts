import { useCallback, useEffect, useState } from 'react';

const useGetProjects = () => {
  const [projectsArray, setProjectsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const headerArray = ['ID', 'Название', 'Описание', 'Куратор', 'Исполнитель', 'Статус'];

  const fetchProjects = useCallback(async () => {
    setIsLoading(true);
    try {
      const resp = await fetch('http://localhost:3000/projects');
      const json = await resp.json();
      setProjectsArray(json);
    } catch (err) {
      console.error('Ошибка при загрузке проектов:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return { projectsArray, headerArray, isLoading, refetch: fetchProjects };
};

export default useGetProjects;
