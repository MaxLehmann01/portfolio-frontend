const ConvertTimestampToDE = (timestamp: string) => {
  const datetime = new Date(timestamp);

  return datetime.toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

export default ConvertTimestampToDE;