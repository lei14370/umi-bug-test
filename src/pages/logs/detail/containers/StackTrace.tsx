/* @flow */

import StackFrame from './StackFrame';
import Collapsible from '../components/Collapsible';
import _ from 'lodash';
const traceStyle = {
  fontSize: '1em',
  flex: '0 1 auto',
  minHeight: '0px',
  overflow: 'auto',
};

const StackTrace = (props: any) => {
  const { stackFrames } = props;
  return (
    <div style={traceStyle}>
      {(stackFrames || []).map((stacks: any) => {
        if (_.isArray(stacks)) {
          return (
            <Collapsible>
              {stacks.map((i) => {
                return (
                  <StackFrame {...i} key={i.url + i.functionName}></StackFrame>
                );
              })}
            </Collapsible>
          );
        } else {
          return <StackFrame {...stacks}></StackFrame>;
        }
      })}
    </div>
  );
};

export default StackTrace;
