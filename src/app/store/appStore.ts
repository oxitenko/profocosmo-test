import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

interface Task {
	id?: number;
	name: string;
	email: string;
	text?: string;
	complite?: boolean;
}

interface State {
	tasks: Task[];
	setState: (newTask: Task) => void;
}

export const useStore = create<State>()(
	immer((set) => ({
		tasks: [
			{
				id: 1,
				name: 'Eat at the Fat Duck',
				email: 'user@user.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: true,
			},
			{
				id: 2,
				name: 'Hike Skylight (4926 Ft)',
				email: 'user@user.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: false,
			},
			{
				id: 3,
				name: 'Learn to Live For Today',
				email: 'user@user.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: true,
			},
			{
				id: 4,
				name: 'Attend Winter Olympics',
				email: 'user@user.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: false,
			},
			{
				id: 5,
				name: 'Slow Dance in the Rain',
				email: 'user@user.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: false,
			},
			{
				id: 6,
				name: 'Go Horseback riding in Texas',
				email: 'admin@admin.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: false,
			},
			{
				id: 7,
				name: 'Do Ceramics',
				email: 'admin@admin.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: true,
			},
			{
				id: 8,
				name: 'Make Out With Someone',
				email: 'admin@admin.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: false,
			},
			{
				id: 9,
				name: 'Cook With a Celebrity Chef',
				email: 'admin@admin.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: true,
			},
		],
		setState: (newTask: Task) =>
			set((state) => {
				state.tasks.unshift({
					id: newTask.id,
					name: newTask.name,
					email: newTask.email,
					text: newTask.text,
					complite: newTask.complite,
				});
			}),
	})),
);
