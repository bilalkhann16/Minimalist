import { PartialType } from "@nestjs/swagger";
import { TaskDTO } from "./task.dto";

export class UpdateTaskDTO extends PartialType(TaskDTO) {}