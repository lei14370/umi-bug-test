/* @flow */
function getPrettyURL(
  sourceFileName: string | null,
  sourceLineNumber: number | null,
  sourceColumnNumber: number | null,
  fileName: string | null,
  lineNumber: number | null,
  columnNumber: number | null,
  compiled: boolean,
): string {
  let prettyURL;
  if (!compiled && sourceFileName && typeof sourceLineNumber === 'number') {
    // Remove everything up to the first /src/ or /node_modules/
    const trimMatch = /^[/|\\].*?[/|\\]((src|node_modules)[/|\\].*)/.exec(
      sourceFileName,
    );
    if (trimMatch && trimMatch[1]) {
      prettyURL = trimMatch[1];
    } else {
      prettyURL = sourceFileName;
    }
    prettyURL += ':' + sourceLineNumber;
    // Note: we intentionally skip 0's because they're produced by cheap webpack maps
    if (sourceColumnNumber) {
      prettyURL += ':' + sourceColumnNumber;
    }
  } else if (fileName && typeof lineNumber === 'number') {
    prettyURL = fileName + ':' + lineNumber;
    // Note: we intentionally skip 0's because they're produced by cheap webpack maps
    if (columnNumber) {
      prettyURL += ':' + columnNumber;
    }
  } else {
    prettyURL = 'unknown';
  }
  return prettyURL.replace('webpack://', '.');
}

export { getPrettyURL };
export default getPrettyURL;
