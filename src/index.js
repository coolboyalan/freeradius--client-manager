import env from "#configs/env";
import server from "#configs/server";
import sequelize from "#configs/database";
import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

const restartDocker = async () => {
  try {
    const { stdout } = await execPromise("sudo systemctl restart freeradius");
    console.log(`stdout: ${stdout}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

restartDocker();

server.listen(env.PORT, () => {
  console.log(`Server is running on PORT ${env.PORT}`);
});
