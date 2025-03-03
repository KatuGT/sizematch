export const filterData = (data: any[], filters: Record<string, string>) => {
    return data.filter((item) =>
      Object.entries(filters).every(([key, value]) => {
        if (!value) return true; // Ignorar filtros vacíos
  
        const regex = new RegExp(`^${value}`); // Expresión regular para búsqueda flexible
  
        return regex.test(item[key]?.toString());
      })
    );
  };
  