// Copyright 2021 99cloud
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { lazy } from 'react';
import BaseLayout from 'layouts/Base';

const Base = lazy(() =>
  import(/* webpackChunkName: "base" */ '@/pages/base/App')
);
const Compute = lazy(() =>
  import(/* webpackChunkName: "compute" */ '@/pages/compute/App')
);
const Storage = lazy(() =>
  import(/* webpackChunkName: "storage" */ '@/pages/storage/App')
);
const Network = lazy(() =>
  import(/* webpackChunkName: "network" */ '@/pages/network/App')
);
const Identity = lazy(() =>
  import(/* webpackChunkName: "identity" */ '@/pages/identity/App')
);
const Configs = lazy(() =>
  import(/* webpackChunkName: "configuration" */ '@/pages/configuration/App')
);
const Management = lazy(() =>
  import(/* webpackChunkName: "management" */ '@/pages/management/App')
);
const Heat = lazy(() =>
  import(/* webpackChunkName: "heat" */ '@/pages/heat/App')
);
const E404 = lazy(() =>
  import(/* webpackChunkName: "E404" */ '@/pages/base/containers/404')
);
const PATH = '/';

export default [
  {
    path: PATH,
    component: BaseLayout,
    routes: [
      { path: `/base`, component: Base },
      {
        path: `/compute`,
        component: Compute,
      },
      { path: `/storage`, component: Storage },
      {
        path: `/network`,
        component: Network,
      },
      {
        path: `/identity`,
        component: Identity,
      },
      {
        path: `/configuration-admin`,
        component: Configs,
      },
      {
        path: `/management`,
        component: Management,
      },
      {
        path: `/heat`,
        component: Heat,
      },
      { path: '*', component: E404 },
    ],
  },
];