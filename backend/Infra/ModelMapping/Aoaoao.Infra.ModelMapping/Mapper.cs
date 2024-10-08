﻿using System.Reflection;
using Mapster;

namespace Aoaoao.Infra.ModelMapping;

public static class Mapper
{
    public static TDestination Map<TDestination>(this object? source)
    {
        return source!.Adapt<TDestination>();
    }

    public static void Map<TSource, TDestination>(this TSource? source, TDestination result)
    {
        source!.Adapt<TSource, TDestination>(result);
    }

    public static IQueryable<TDestination> MapQueryable<TDestination>(
        this IQueryable source)
    {
        return source.ProjectToType<TDestination>();
    }

    /// <summary>
    ///     Сканирование сборок и компиляция конфигураций
    /// </summary>
    public static void ScanAndEnsureConfigurations(Assembly rootAssembly)
    {
        var assemblies = new HashSet<Assembly>();
        FillWithAssembliesWithPrefix(rootAssembly, assemblies);
        TypeAdapterConfig.GlobalSettings.RequireDestinationMemberSource = false;
        TypeAdapterConfig.GlobalSettings.Scan(assemblies.ToArray());
        TypeAdapterConfig.GlobalSettings.Compile();
    }

    private static void FillWithAssembliesWithPrefix(Assembly rootAssembly, ISet<Assembly> assemblies)
    {
        assemblies.Add(rootAssembly);

        var assembliesWithPrefix = rootAssembly
            .GetReferencedAssemblies()
            .Select(Assembly.Load)
            .ToArray();

        if (assembliesWithPrefix.Length == 0)
            return;

        foreach (var assembly in assembliesWithPrefix)
        {
            assemblies.Add(assembly);
            if (!assemblies.Contains(assembly))
                FillWithAssembliesWithPrefix(assembly, assemblies);
        }
    }
}