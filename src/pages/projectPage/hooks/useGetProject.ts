import { useParams } from 'react-router';

import { useCallback, useEffect, useState } from 'react';

import type { IProjectItem } from '../../../shared/types';

const useGetProject = () => {
  const { id } = useParams();

  const [project, setProject] = useState<IProjectItem>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchProject = useCallback(async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(`http://localhost:3000/projects/${id}`);
      const json = await resp.json();
      setProject(json);
    } catch (err) {
      console.error('Ошибка при загрузке проекта:', err);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  return { project, isLoading, refetch: fetchProject };
};

export default useGetProject;
