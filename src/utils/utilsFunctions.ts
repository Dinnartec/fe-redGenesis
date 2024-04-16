export function transformForSelect(
  data: any[],
  labelField: string,
  valueField: string
) {
  return data.map((item) => ({
    data: item,
    label: item[labelField],
    value: item[valueField],
  }));
}
