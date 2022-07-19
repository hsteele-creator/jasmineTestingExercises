describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should empty the server input at the end of the function', function() {
      submitServerInfo();
      expect(serverNameInput.value).toEqual("");
  })

  it('checks if the server array is empty before any servers are entered', function() {
    updateServerTable();
    expect(allServers.length).toEqual(undefined);
  })






  afterEach(function() {
    serverId = 0;
    allServers = {};
    serverNameInput.value = "";
  });
});
