/* @flow */
import React from 'react';
import Header from '../components/Header';
import StackTrace from './StackTrace';

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
};

export type ErrorRecord = {
  error: Error;
  unhandledRejection: boolean;
  contextSize: number;
  stackFrames: any[];
};

type Props = {
  errorRecord: any;
};

function RuntimeError({ errorRecord }: Props) {
  const { headerText, error, contextSize, unhandledRejection, renderedFrames } =
    errorRecord;
  const errorName = unhandledRejection
    ? 'Unhandled Rejection (' + error.name + ')'
    : error.name;

  return (
    <div style={wrapperStyle}>
      <Header headerText={headerText} />
      <StackTrace
        stackFrames={renderedFrames}
        errorName={errorName}
        contextSize={contextSize}
      />
    </div>
  );
}

export default RuntimeError;
