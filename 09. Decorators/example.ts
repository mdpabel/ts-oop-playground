const logger = (
  constructor: Fetcher,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) => {
  const method = descriptor.value;
  console.log({
    isLoading: true,
  });

  method();

  console.log({
    isLoading: false,
  });
};

class Fetcher {
  @logger
  fetch() {
    console.log({
      data: [],
    });
  }
}
