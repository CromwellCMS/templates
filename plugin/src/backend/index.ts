import { getLogger, registerAction, TBackendModule } from '@cromwell/core-backend';
import { Controller, Get } from '@nestjs/common';


registerAction({
  pluginName: 'your-plugin-name',
  actionName: 'install_plugin',
  action: async (payload) => {
    if (payload.pluginName === 'your-plugin-name') {
      getLogger().info('Thanks for installing our plugin!');
    }
  }
});


@Controller('your-plugin-name')
class ExampleController {

  @Get('test')
  async test() {
    return {
      data: 'hello world'
    }
  }
}

const backendModule: TBackendModule = {
  controllers: [ExampleController],
  entities: [],
  resolvers: [],
  migrations: [],
}

export default backendModule;