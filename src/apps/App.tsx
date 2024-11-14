import {
  AuthProvider,
  MantineProvider,
  ReactQueryProvider,
  RoutesProvider,
} from "../providers";

function App() {
  return (
    <AuthProvider>
      <MantineProvider>
        <ReactQueryProvider>
          <RoutesProvider />
        </ReactQueryProvider>
      </MantineProvider>
    </AuthProvider>
  );
}

export default App;
