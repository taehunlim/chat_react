import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { SWRConfig } from 'swr';
import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';

import { useAxios } from './utils/useAxios';
import { Store } from './store';
import GlobalStyles from './assets/styles/GlobalStyles';
import theme from './assets/styles/theme';

import { Home, ChatRoom, Template } from './pages';

const App: React.FC = () => {
    const { api, loading } = useAxios();
    const swrConfig = {
        // useSWR에 url만 적어도 axios의 response.data 값이 return
        fetcher: (url: string, params: object) => {
            api
                .get(url, {params})
                .then(response => response.data)
        }
    };
    return (
        <RecoilRoot>
            <Store>
                <SWRConfig value={swrConfig}>
                    <BrowserRouter>
                        <ThemeProvider theme={theme}>
                            <GlobalStyles/>
                            <Switch>
                                <Route path="/template" exact render={props => <Template {...props} />}/>
                                <Route path="/" exact render={props => <Home {...props} />}/>
                                <Route path="/:roomId" exact render={props => <ChatRoom {...props} />}/>
                                <Redirect to="/"/>
                            </Switch>
                        </ThemeProvider>
                    </BrowserRouter>
                </SWRConfig>
            </Store>
        </RecoilRoot>
    );
};

export default App;