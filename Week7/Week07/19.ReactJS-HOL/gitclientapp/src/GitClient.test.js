 import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const dummyRepos = [
      { name: 'Repo1' },
      { name: 'Repo2' },
    ];

    axios.get.mockResolvedValue({ data: dummyRepos });

    const response = await GitClient.getRepositories('techiesyed');

    expect(response.data).toEqual(dummyRepos);
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
  });
});
