{
  // asynchronous typescript

  //basic promise

  // simulate
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  //calling create promise function
  const showData = async () => {
    const data = await createPromise();
    return data;
  };

  showData();
  //
}
