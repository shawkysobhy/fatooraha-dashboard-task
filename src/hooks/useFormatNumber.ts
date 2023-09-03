const formatNumber = (number: any) => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const useFormatNumber = (initialNumber: number) => {
	return formatNumber(initialNumber);
};
