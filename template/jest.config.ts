import type {Config} from '@jest/types';

export default <Config.InitialOptions>{
    verbose: true,
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    }
};
