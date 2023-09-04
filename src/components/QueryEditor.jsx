import { memo } from 'react';
import ReactCodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import { githubLight, githubDark } from '@uiw/codemirror-theme-github';
import useAppStore from '../store/useAppStore';

const QueryEditor = memo(function QueryEditor({ query, setQuery }) {
  const darkMode = useAppStore((state) => state.darkMode);

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div className={`bg-white dark:bg-gray-800 border rounded-md ${darkMode ? 'border-blue-600' : 'border-gray-300'} p-2`}>
      <ReactCodeMirror
        value={query}
        extensions={[sql()]}
        onChange={handleQueryChange}
        theme={darkMode ? githubDark : githubLight}
      />
    </div>
  );
});

export default QueryEditor;
