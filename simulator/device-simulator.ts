/*
* Copyright (c) 2019 Software AG, Darmstadt, Germany and/or its licensors
*
* SPDX-License-Identifier: Apache-2.0
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
 */

import { InjectionToken } from '@angular/core';

export const HOOK_SIMULATION_STRATEGY_FACTORY = new InjectionToken('SimulationStrategy');

export abstract class DeviceSimulator {
    started = false;

    start() {
        if (this.started) throw Error("Simulator already started");
        this.started = true;
        this.onStart();
    }
    stop() {
        if (!this.started) throw Error("Simulator already stopped");
        this.started = false;
        this.onStop();
    }

    abstract onStart();
    abstract onStop();
    isStarted() {
        return this.started
    };
    onReset() {};
}
